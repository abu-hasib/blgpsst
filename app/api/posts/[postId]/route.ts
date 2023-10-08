export async function POST(req: Request, res: any) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('postId')
    console.log({id})
    console.log({req: req.body})
    return new Response(null, { status: 200 })
}