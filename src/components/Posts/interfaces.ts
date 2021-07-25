// it is good programming practise to use interface in a different file. This will make code modular. 
export interface IPosts {
    heading: string;
    subHeading: string;
    summary: string;
}

export interface IPostProps {
    posts: IPosts[];
}