import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useAuth from './useAuth';

// export function  withPublic(Component) {
//     return function withPublic (props){
//         const auth = useAuth()
//         const router = useRouter()

//         if(auth.user){
//            router.replace("/")
//            return <button type="button" class="bg-indigo-500 ..." disabled>
//            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
//            </svg>
//            Processing...
//          </button>
//         }
//         return <Component auth={auth} {...props} />
//     }
// }
//

export function withPrivate(Component) {
    return function withPrivate(props) {
        const auth = useAuth()
        const router = useRouter()

        if (!auth.user.email) {
            useEffect(() => {
                router.replace("/login/register")
            }, [])
            return <button type="button" className="bg-indigo-500 ..." disabled>
                <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                </svg>
                Processing...
            </button>
        }
        return <Component auth={auth} {...props} />
    }
}