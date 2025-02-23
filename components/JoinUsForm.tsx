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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className='max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black mt-4'>
      <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
        Welcome to BodhScriptClub
      </h2>
      <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
        Please fill out the form to join us!
      </p>

      <form
        className='my-8'
        method='post'
        action={
          'https://script.google.com/macros/s/AKfycbyWnwvv62fidCTK-kGChjygQc2_AX0rhpLcs1x4WkR29slPkBviiqPclSC-fzbAbZq-BA/exec'
        }
      >
        <LabelInputContainer>
          <Label htmlFor='name'>Full Name</Label>
          <Input
            id='name'
            name='name'
            placeholder='John Doe'
            type='text'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor='email'>Email Address</Label>
          <Input
            id='email'
            name='email'
            placeholder='john.doe@example.com'
            type='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor='contact'>Contact Number</Label>
          <Input
            id='contact'
            name='contact'
            placeholder='+1234567890'
            type='tel'
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor='branch'>Branch</Label>
          <Input
            id='branch'
            name='branch'
            placeholder='Engineering / Science'
            type='text'
            value={formData.branch}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor='idcard'>Upload ID Card</Label>
          <Input
            id='idcard'
            name='idcard'
            type='file'
            accept='image/*,application/pdf'
            // onChange={handleFileChange}
          />
        </LabelInputContainer>

        <button
          className='bg-gradient-to-br relative group/btn from-black to-neutral-600 block w-full text-white rounded-md h-10 font-medium'
          type='submit'
        >
          Submit &rarr;
        </button>
      </form>

      {message && (
        <div className='flex items-center justify-center mt-4 text-green-500'>
          <FaCheckCircle className='mr-2' /> {message}
        </div>
      )}

      {showQR && (
        <div className='flex flex-col items-center mt-4'>
          <p className='text-neutral-800 dark:text-neutral-200'>
            Scan this QR Code:
          </p>
          <QRCode value={JSON.stringify(formData)} size={150} />
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
