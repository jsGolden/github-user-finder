export interface UserInterface {
    login: string;
    name: string;
    bio: string;
    followers: number;
    following: number;
    avatar_url: string;
    html_url: string;
    public_repos: string;
    followers_url: string;
    url: string;
    repos_url: string;
}

export interface FollowerInterface {
    id: number;
    login: string;
    url: string;
    followers_url: string;
    avatar_url: string;
}

export interface RepositoryInterface {
    name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
    language: string;
    id: number;
}

export interface LanguageColor {
    [LanguageName: string]: {
      color: string;
    }
}