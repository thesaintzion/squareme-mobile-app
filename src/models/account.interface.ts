export interface UserType {
  firstName: string;
  lastName: string;
  email: string;
  employeeId: string;
  address: string;
  photo: string;
  phoneNumber: string;
}

export interface UserContextType {
  user: UserType | null;
  setUser: { (data: UserType | null): void };
  isAuthenticated: boolean;
  setIsAuthenticated: { (data: boolean): void }; 
}


export interface OtoVerifyProp {
  error?: string;
  onComplete?: (sata: string) => void
  onChange: (sata: string[]) => void
}
