export function getFingerprint() {
    // 1. Device data
    const screenResolution = `${window.screen.width}x${window.screen.height}`
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const language = navigator.language
    const userAgent = navigator.userAgent

    // 2. Data string
    const dataString = `${screenResolution}-${timezone}-${language}-${userAgent}`

    // 3. Data hash
    const hash = sha256(dataString)

    // 4. Return the hash
    return hash
}

// Función para hacer el hash con SHA256
async function sha256(message: string) {
    const encoder = new TextEncoder()
    const data = encoder.encode(message)
    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('')
    return hashHex
}
