export const WHATSAPP_NUMBER = '5569992199752'
export const WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da Moratta e gostaria de mais informações.'
export const INSTAGRAM_URL = 'https://www.instagram.com/arquitetura.moratta'
export const EMAIL_ADDRESS = 'moratta.arquiteturalm@gmail.com'

export function getWhatsAppLink(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
