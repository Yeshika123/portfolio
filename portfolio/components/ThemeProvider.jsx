'use client'

import {ThemeProvider as NextThemeManger} from 'next-themes'

export function ThemeProvider({children, ...props}){
    return <NextThemeManger {...props}>
        {children}
    </NextThemeManger>
}