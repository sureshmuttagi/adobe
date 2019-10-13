export interface Search {
    created_at: string;
    text: string;
    user: User;
    id: number;
}

export interface User {
    screen_name: string;
    profile_image_url_https: string;
}


export interface QueryParamList{
    key: string;
}