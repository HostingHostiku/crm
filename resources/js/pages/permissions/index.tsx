import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { type BreadcrumbItem } from '@/types';
import InputError from '@/components/input-error';

interface Role {
    id: number;
    name: string;
}
interface Permission {
    id: number;
    name: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Permissions', href: '/permissions' },
];

export default function Permissions({ roles, permissions }: { roles: Role[]; permissions: Permission[] }) {
    const { data, setData, post, processing, errors, reset } = useForm({ name: '', role_id: '' });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('permissions.store'), { onSuccess: () => reset() });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Permissions" />
            <div className="space-y-6">
                <form onSubmit={submit} className="grid gap-4 md:grid-cols-3">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Permission</Label>
                        <Input id="name" value={data.name} onChange={e => setData('name', e.target.value)} required />
                        <InputError message={errors.name} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="role_id">Assign to role ID (optional)</Label>
                        <Input id="role_id" value={data.role_id} onChange={e => setData('role_id', e.target.value)} />
                        <InputError message={errors.role_id} />
                    </div>
                    <Button className="self-end" disabled={processing} type="submit">Add</Button>
                </form>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="text-left">
                                <th className="p-2">Permission</th>
                            </tr>
                        </thead>
                        <tbody>
                            {permissions.map(p => (
                                <tr key={p.id} className="border-t">
                                    <td className="p-2">{p.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm mt-6">
                        <thead>
                            <tr className="text-left">
                                <th className="p-2">Role</th>
                                <th className="p-2">Permissions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {roles.map((r) => {
                                const perms = (r as Role & { permissions?: Permission[] }).permissions ?? [];
                                return (
                                    <tr key={r.id} className="border-t">
                                        <td className="p-2">{r.name}</td>
                                        <td className="p-2">{perms.map((p) => p.name).join(', ')}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
