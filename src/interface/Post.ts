//creamos nuestra interface para utilizarla en el envío POST hacia la base de datos

export interface Post {
    id?: string;
    title: string;
    description: string;
    image_url: string;
    created_at: Date;
}
