import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useAuth from './useAuth';

export function withPrivate(Component) {
    return function withPrivate(props) {
        const auth = useAuth()
        const router = useRouter()
        if (!auth.user.email) {
            useEffect(() => {
                router.replace("/login/register")
            }, [router])
            return <button type="button" className="bg-indigo-500 ..." disabled>
                <div className='min-h-screen bg-gray-900 flex items-center justify-center w-vw'>
                    <div className="lds-spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </button>
        }
        return <Component auth={auth} {...props} />
    }
}