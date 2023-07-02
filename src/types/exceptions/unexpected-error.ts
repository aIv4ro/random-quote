export class UnexpectedError extends Error {
  readonly message = 'Unexpected error occoured'

  constructor (
    readonly errorMessage: string
  ) {
    super()
  }
}
