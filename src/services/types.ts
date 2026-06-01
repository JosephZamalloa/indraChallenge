export interface Plan {
  name: string;
  price: number;
  description: string[];
  age: number;
}

export interface PlansData {
  list: Plan[];
}

export interface UserInfo {
  name: string;
  lastName: string;
  birthDay: string;
}

export interface GetDataResponse {
  user: UserInfo;
  plans: PlansData;
}
