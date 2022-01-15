export const required = (message) => ({
  required: true,
  message,
})

export const email = (message) => ({
  type: 'email',
  message,
})