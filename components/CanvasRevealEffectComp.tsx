'use client'
import { cn } from '@/lib/utils'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'

export const CanvasRevealEffect = ({
  animationSpeed = 0.5,
  opacities = [0.2, 0.3, 0.5, 0.7, 1],
  colors = [
    [255, 99, 71], // Tomato
    [0, 255, 255], // Cyan
    [75, 0, 130], // Indigo
  ],
  containerClassName,
  dotSize = 4,
  showGradient = true,
}: {
  animationSpeed?: number
  opacities?: number[]
  colors?: number[][]
  containerClassName?: string
  dotSize?: number
  showGradient?: boolean
}) => {
  return (
    <div className={cn('h-full relative bg-black w-full', containerClassName)}>
      <div className='h-full w-full'>
        <DotMatrix
          colors={colors}
          dotSize={dotSize}
          opacities={opacities}
          shader={`
            float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.02 + (random(st2) * 0.2);
            opacity *= smoothstep(intro_offset, u_time * ${animationSpeed.toFixed(
              1
            )}, intro_offset + 0.1);
          `}
          center={['x', 'y']}
        />
      </div>
      {showGradient && (
        <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70' />
      )}
    </div>
  )
}

const DotMatrix: React.FC<{
  colors: number[][]
  opacities: number[]
  dotSize: number
  shader: string
  center: ('x' | 'y')[]
}> = ({ colors, opacities, dotSize, shader, center }) => {
  const uniforms = useMemo(
    () => ({
      u_colors: {
        value: colors.map((color) => color.map((c) => c / 255)),
        type: 'uniform3fv',
      },
      u_opacities: {
        value: opacities,
        type: 'uniform1fv',
      },
      u_total_size: { value: 5, type: 'uniform1f' },
      u_dot_size: { value: dotSize, type: 'uniform1f' },
    }),
    [colors, opacities, dotSize]
  )

  return (
    <ShaderMaterial
      source={`
      precision mediump float;
      in vec2 fragCoord;
      uniform float u_time;
      uniform vec3 u_colors[3];
      uniform float u_opacities[5];
      uniform float u_total_size;
      uniform float u_dot_size;
      uniform vec2 u_resolution;
      out vec4 fragColor;
      float random(vec2 xy) {
          return fract(sin(dot(xy, vec2(12.9898, 78.233))) * 43758.5453);
      }
      void main() {
          vec2 st = fragCoord.xy / u_resolution.xy;
          vec2 grid = fract(st * u_total_size);
          float opacity = step(grid.x, u_dot_size) * step(grid.y, u_dot_size);
          opacity *= u_opacities[int(random(st) * 5.0)];
          vec3 color = u_colors[int(random(st) * 3.0)];
          ${shader}
          fragColor = vec4(color, opacity);
      }
    `}
      uniforms={uniforms}
      maxFps={60}
    />
  )
}

const ShaderMaterial = ({ source, uniforms, maxFps = 60 }) => {
  const { size } = useThree()
  const ref = useRef<THREE.Mesh>()
  let lastFrameTime = 0
  useFrame(({ clock }) => {
    if (!ref.current) return
    const timestamp = clock.getElapsedTime()
    if (timestamp - lastFrameTime < 1 / maxFps) return
    lastFrameTime = timestamp
    ref.current.material.uniforms.u_time.value = timestamp
  })
  return (
    <mesh ref={ref}>
      <shaderMaterial
        args={[{ vertexShader: '', fragmentShader: source, uniforms }]}
      />
    </mesh>
  )
}
