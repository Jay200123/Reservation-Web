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
  image: File[];
};

type EditProfileFormik = {
  fullname: string;
  email: string;
  contact_number: string;
  address: string;
  city: string;
  image: File[];
};

export type { 
  SignInFormik, 
  SignUpFormik, 
  EditProfileFormik
};
