import { NextResponse } from "next/server";

// usamos funciones flecha

export const GET = async () => {
    const datos = process.env.API_URL
    const result = await fetch(datos, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    })
    const products = await result.json()
    return NextResponse.json({ data: products }, { status: 200 })
};

export const POST = async (req) => {
    const datos = process.env.API_URL
    const product = await req.json()
    console.log(product)

    const result = await fetch(datos, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(product)

    })
    const newProduct = await result.json()
    return NextResponse.json({ data: newProduct })


}