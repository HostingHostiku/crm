import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { type BreadcrumbItem } from '@/types';
import InputError from '@/components/input-error';

interface Contact {
    id: number;
    name: string;
    email?: string;
    phone?: string;
    role?: string;
    client_id: number;
    client: { id: number; name: string };
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Contacts', href: '/contacts' },
];

export default function Contacts({ contacts }: { contacts: Contact[] }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        client_id: '',
        name: '',
        email: '',
        phone: '',
        role: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('contacts.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Contacts" />
            <div className="space-y-6">
                <form onSubmit={submit} className="grid gap-4 md:grid-cols-5">
                    <div className="grid gap-2 md:col-span-2">
                        <Label htmlFor="client_id">Client ID</Label>
                        <Input id="client_id" value={data.client_id} onChange={e => setData('client_id', e.target.value)} required />
                        <InputError message={errors.client_id} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" value={data.name} onChange={e => setData('name', e.target.value)} required />
                        <InputError message={errors.name} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" value={data.email} onChange={e => setData('email', e.target.value)} />
                        <InputError message={errors.email} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" value={data.phone} onChange={e => setData('phone', e.target.value)} />
                        <InputError message={errors.phone} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="role">Role</Label>
                        <Input id="role" value={data.role} onChange={e => setData('role', e.target.value)} />
                        <InputError message={errors.role} />
                    </div>
                    <Button className="md:col-span-5" disabled={processing} type="submit">Add contact</Button>
                </form>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="text-left">
                                <th className="p-2">Name</th>
                                <th className="p-2">Email</th>
                                <th className="p-2">Phone</th>
                                <th className="p-2">Role</th>
                                <th className="p-2">Client</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map(contact => (
                                <tr key={contact.id} className="border-t">
                                    <td className="p-2">{contact.name}</td>
                                    <td className="p-2">{contact.email}</td>
                                    <td className="p-2">{contact.phone}</td>
                                    <td className="p-2">{contact.role}</td>
                                    <td className="p-2">{contact.client?.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
