import { toast } from 'vue3-toastify'

export const useCopyText = () => {
    const email = 'thuthuynguyen19012002@gmail.com'
    const copyText = async () => {
        try {
            await navigator.clipboard.writeText(email)
            toast.success('Copy mail done')
        } catch (err) {
            toast.error('Copy mail fail')
        }
    }

    return {
        email,
        copyText,
    }
}
