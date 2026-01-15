
import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { secret, tag } = await request.json();

        // Check for a secret to prevent unauthorized revalidation
        // For simplicity in this demo we use a hardcoded secret, but in production use an env var
        if (secret !== process.env.REVALIDATION_SECRET && secret !== 'super-secret-revalidation-token') {
            return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
        }

        if (!tag) {
            return NextResponse.json({ message: 'Missing tag' }, { status: 400 });
        }

        // @ts-expect-error - Next.js 16.1.1 beta type mismatch
        revalidateTag(tag);

        return NextResponse.json({ revalidated: true, now: Date.now() });
    } catch (err) {
        return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
    }
}
