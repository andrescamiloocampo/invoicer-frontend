import { redirect } from "next/navigation";
import { type ReactElement } from "react";

export default async function Home():Promise<ReactElement> {
  redirect('/dashboard');
}
