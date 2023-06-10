import { EmailDateType, sendMail, transporter } from '@/service/email';
import { NextRequest, NextResponse } from 'next/server';
import nodemail from 'nodemailer';

// Request기반임 추가적으로 NextRequests는 cookies를 조작할수 있도록해줌
export async function POST(req: NextRequest) {
  const data = (await req.json()) as EmailDateType;

  return sendMail(data).then(() => {
    return NextResponse.json(
      { message: '메일을 성공적으로 보냄' },
      { status: 200 }
    );
  });
}
