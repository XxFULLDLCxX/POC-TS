const conflict = (message: string) => ({
  type: 'conflict',
  message
})

const schema = (message: string) => ({
  type: 'joi-error',
  message
})

export const errors = {
  conflict, schema
}