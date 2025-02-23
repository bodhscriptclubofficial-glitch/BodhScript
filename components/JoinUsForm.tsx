'use client'

import React, { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import QRCode from 'react-qr-code'
import { FaCheckCircle } from 'react-icons/fa'

interface FormData {
  name: string
  email: string
  contact: string
  branch: string
  idcard: File | null
  idcardBase64?: string
}

export function JoinUsForm() {
  const [showQR, setShowQR] = useState(false)
  const [message, setMessage] = useState('')
  const [submissions, setSubmissions] = useState<FormData[]>([])
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    contact: '',
    branch: '',
    idcard: null,
    idcardBase64: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className='max-w-md w-full mx-auto rounded-lg p-6 shadow-lg bg-neutral-900 text-white mt-6 border border-neutral-700'>
      <h2 className='font-bold text-2xl text-white'>
        Welcome to BodhScriptClub
      </h2>
      <p className='text-neutral-400 text-sm mt-2'>
        Please fill out the form to join us!
      </p>

      <form
        className='my-8 space-y-4'
        method='post'
        action={
          'https://script.google.com/macros/s/AKfycbyWnwvv62fidCTK-kGChjygQc2_AX0rhpLcs1x4WkR29slPkBviiqPclSC-fzbAbZq-BA/exec'
        }
      >
        <LabelInputContainer>
          <Label htmlFor='name' className='text-neutral-300'>
            Full Name
          </Label>
          <Input
            id='name'
            name='name'
            placeholder='John Doe'
            type='text'
            value={formData.name}
            onChange={handleChange}
            required
            className='bg-neutral-800 text-white border border-neutral-600 focus:ring-2 focus:ring-blue-500'
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor='email' className='text-neutral-300'>
            Email Address
          </Label>
          <Input
            id='email'
            name='email'
            placeholder='john.doe@example.com'
            type='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='bg-neutral-800 text-white border border-neutral-600 focus:ring-2 focus:ring-blue-500'
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor='contact' className='text-neutral-300'>
            Contact Number
          </Label>
          <Input
            id='contact'
            name='contact'
            placeholder='+1234567890'
            type='tel'
            value={formData.contact}
            onChange={handleChange}
            required
            className='bg-neutral-800 text-white border border-neutral-600 focus:ring-2 focus:ring-blue-500'
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor='branch' className='text-neutral-300'>
            Branch
          </Label>
          <select
            id='branch'
            name='branch'
            value={formData.branch}
            onChange={handleChange}
            required
            className='bg-neutral-800 text-white border border-neutral-600 focus:ring-2 focus:ring-blue-500 rounded-md p-2'
          >
            <option value='' disabled>
              Select your branch
            </option>
            <option value='BCA'>BCA</option>
            <option value='MCA'>MCA</option>
            <option value='MSc'>MSc</option>
            <option value='BSc'>BSc</option>
            <option value='BTech'>BTech</option>
          </select>
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor='idcard' className='text-neutral-300'>
            Upload ID Card
          </Label>
          <Input
            id='idcard'
            name='idcard'
            type='file'
            accept='image/*,application/pdf'
            className='bg-neutral-800 text-white border border-neutral-600 focus:ring-2 focus:ring-blue-500 file:text-white file:bg-neutral-700 file:border-none file:px-4 file:py-2 file:rounded-md file:-mt-6 file:-ml-4'
            // onChange={handleFileChange}
          />
        </LabelInputContainer>

        <button
          className='bg-blue-600 hover:bg-blue-500 transition-all duration-200 ease-in-out w-full text-white rounded-md h-10 font-semibold shadow-lg'
          type='submit'
        >
          Submit &rarr;
        </button>
      </form>

      {message && (
        <div className='flex items-center justify-center mt-4 text-green-400'>
          <FaCheckCircle className='mr-2' /> {message}
        </div>
      )}

      {showQR && (
        <div className='flex flex-col items-center mt-4'>
          <p className='text-neutral-300'>Scan this QR Code:</p>
          <QRCode
            value={JSON.stringify(formData)}
            size={150}
            bgColor='#111'
            fgColor='#FFF'
          />
        </div>
      )}
    </div>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  )
}
