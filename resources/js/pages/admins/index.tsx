import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { type BreadcrumbItem } from '@/types';
import InputError from '@/components/input-error';

interface Admin {
    id: number;
    name: string;
    email: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Administrators', href: '/admins' },
];

export default function Admins({ admins }: { admins: Admin[] }) {
    const { data, setData, post, processing, errors, reset } = useForm({ user_id: '' });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admins.store'), { onSuccess: () => reset() });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Administrators" />
            <div className="space-y-6">
                <form onSubmit={submit} className="flex gap-2">
                    <div className="flex-1">
                        <Label htmlFor="user_id">User ID</Label>
                        <Input id="user_id" value={data.user_id} onChange={e => setData('user_id', e.target.value)} required />
                        <InputError message={errors.user_id} />
                    </div>
                    <Button disabled={processing} type="submit">Assign</Button>
                </form>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="text-left">
                                <th className="p-2">Name</th>
                                <th className="p-2">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admins.map(admin => (
                                <tr key={admin.id} className="border-t">
                                    <td className="p-2">{admin.name}</td>
                                    <td className="p-2">{admin.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
