import Swal from "sweetalert2";
const URL_PREFACE = process.env.NODE_ENV === "production" ? "" : "http://localhost:3000";


async function fetchieHelper(url: string, method: string = "GET", rawData?: any) {
    const headers: HeadersInit = {}
    const options: RequestInit = {
        headers,
        method
    };
    if(method === "POST" || method === "PUT") {
        headers["Content-Type"] = "application/json";
        options["body"] = JSON.stringify(rawData);
    }

    return new Promise(async (resolve) => {
        try {
            const res = await fetch(URL_PREFACE + url);
            const data = await res.json();
            if (res.ok) {
                resolve(data);
            } else {
                if (data.message) {
                    Swal.fire({
                        icon: "error",
                        title: "Try Again!",
                        text: data.message,
                    })
                }
            }    
            
        } catch(error) {
            console.error(error)
            Swal.fire({
                icon: 'error',
                title: 'Networking Issue Try Again Later',
                text: (error as Error).message
            })
        }
    }); 
}

export const GET = (url: string) => fetchieHelper(url);
export const DELETE = (url: string) => fetchieHelper(url, "DELETE");
export const PUT = (url: string, data: any) => fetchieHelper(url, "PUT", data);
export const POST = (url: string, data: any) => fetchieHelper(url, "POST", data);