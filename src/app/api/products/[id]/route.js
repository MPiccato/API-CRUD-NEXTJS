import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const datos = process.env.API_URL
    const id = params.id
    const result = await fetch(`${datos}/${id}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    })
    const product = await result.json()
    return NextResponse.json({ data: product })
}

//eliminar un registro
export const DELETE = async (req, { params }) => {
    const datos = process.env.API_URL
    const id = params.id
    const result = await fetch(`${datos}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
        }
    })
    const productEliminado = await result.json()
    return NextResponse.json({ data: productEliminado })


}