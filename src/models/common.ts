interface Common {
  loading: Readonly<object>;
  requestCompleted: boolean;
  error?: ErrorState;
}

export type CommonState = Readonly<Common>;
export type ErrorState = Readonly<Error>;
