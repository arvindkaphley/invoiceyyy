"use client"
// import {sql} from 'drizzle-orm';

// import { db } from '@/db';

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createAction } from '@/app/action';
import { SyntheticEvent, useState } from 'react';
import SubmitButton from '@/components/SubmitButton';
// import { Button } from '@/components/ui/button';
import Form from 'next/form'
import Container from "@/components/Container";
export default function Home() {
    const [state,setState]=useState('ready');
    async function handleOnSubmit(event: SyntheticEvent){
        if(state==='pending'){
            event.preventDefault()
            return;
        }
        setState('pending');
    }
    // const results=await db.execute(sql`SELECT current_database()`)
    return (
        <main className="h-full">
        <Container>
            <div className="flex justify-between mb-6">
                <h1 className="text-3xl font-bold">Create A New Invoice</h1>
            </div>
            <Form action={createAction} onSubmit={handleOnSubmit} className="grid gap-4 max-w-xs">
                <div>
                    <Label htmlFor="name" className="block mb-2 font-semibold text-sm">Billing Name</Label>
                    <Input id="name" name="name" type="text" />
                </div>
                <div>
                    <Label htmlFor="email" className="block mb-2 font-semibold text-sm">Billing Email</Label>
                    <Input id="email" name="email" type="email" />
                </div>
                <div>
                    <Label htmlFor="value" className="block mb-2 font-semibold text-sm">Value</Label>
                    <Input id="value" name="value" type="text" />
                </div>
                <div>
                    <Label htmlFor="description" className="block mb-2 font-semibold text-sm">Description</Label>
                    <Textarea id="description" name="description"></Textarea>
                </div>
                <div>
                    <SubmitButton/>
                </div>
            </Form>
        </Container>
        </main>
    );
  }