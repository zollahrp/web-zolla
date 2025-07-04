'use client'
import { notFound } from 'next/navigation'
import React, { Children, useEffect } from 'react'
import { useState } from 'react'

function AuthGuard({ children } ){
    const [cektoken, setCekToken] = useState(false)

    useEffect(() => {
        // ambil token dari localStorage
        const token = localStorage.getItem("token")

        // jika token tidak ada, redirect ke halaman not found
        if (!token) {
            notFound()
        } else {
            setCekToken(true)
        }
    }, [])

    if (!cektoken) {
        return null
    }
  return (
    <>{children}</>
  )
}

export default AuthGuard