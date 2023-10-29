import p1 from "@/public/images/productdetails/07.jpg";
import p2 from "@/public/images/productdetails/02.jpg";
import p3 from '@/public/images/productdetails/03.jpg';
import p4 from '@/public/images/productdetails/04.jpg';
import p5 from '@/public/images/productdetails/05.jpg';
import p6 from '@/public/images/productdetails/06.jpg';


const Medias = [
    
    {
        "id":1,
        "type":"image",
        "src":p1,
        "isMain":false,
    },
    {
        "id":2,
        "type":"image",
        "src":p2,
        "isMain":false,
    },
    {
        "id":3,
        "type":"video",
        "src":'https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4',
        "picsrc":p1,
        "isMain":false,
    },
    {
        "id":4,
        "type":"image",
        "src":p3,
        "isMain":false,
    },
    {
        "id":5,
        "type":"video",
        "src":'https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4',
        "picsrc":p1,
        "isMain":false,
    },
    {
        "id":6,
        "type":"image",
        "src":p5,
        "isMain":false,
    },
    {
        "id":7,
        "type":"image",
        "src":p4,
        "isMain":true,
    },
    {
        "id":8,
        "type":"video",
        "src":'https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4',
        "picsrc":p2,
        "isMain":false,
    },
    {
        "id":9,
        "type":"video",
        "src":'https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4',
        "picsrc":p3,
        "isMain":true,
    },
    {
        "id":10,
        "type":"image",
        "src":p4,
        "isMain":true,
    },
    {
        "id":11,
        "type":"video",
        "src":'https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4',
        "picsrc":p4,
        "isMain":true,
    },
    {
        "id":12,
        "type":"image",
        "src":p6,
        "isMain":true,
    }
    
]





export const getMedias = () => {
    return Medias;
}