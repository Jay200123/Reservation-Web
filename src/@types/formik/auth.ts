type SignInFormik = {
  username: string;
  password: string;
};

type SignUpFormik = {
  username: string;
  password: string;
  fullname: string;
  email: string;
  contact_number: string;
  address: string;
  city: string;
};

export type { SignInFormik, SignUpFormik };
