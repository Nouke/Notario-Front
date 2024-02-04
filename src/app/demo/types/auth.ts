export interface SigninResponse {
    id: number;
    username: string;
    email: string;
    authorities: Authority[];
    enabled: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
    accountNonExpired: boolean;
}
interface Authority {
    authority: string;
}
export interface Credential {
    username: string;
    password: string;
}
