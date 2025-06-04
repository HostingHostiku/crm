import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { type BreadcrumbItem } from '@/types';
import InputError from '@/components/input-error';

interface Project {
    id: number;
    name: string;
    description?: string;
    start_date?: string;
    end_date?: string;
    client: { id: number; name: string };
    client_id: number;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Projects', href: '/projects' },
];

export default function Projects({ projects }: { projects: Project[] }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        client_id: '',
        name: '',
        description: '',
        start_date: '',
        end_date: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('projects.store'), { onSuccess: () => reset() });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects" />
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
                    <div className="grid gap-2 md:col-span-2">
                        <Label htmlFor="description">Description</Label>
                        <Input id="description" value={data.description} onChange={e => setData('description', e.target.value)} />
                        <InputError message={errors.description} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="start_date">Start</Label>
                        <Input id="start_date" type="date" value={data.start_date} onChange={e => setData('start_date', e.target.value)} />
                        <InputError message={errors.start_date} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="end_date">End</Label>
                        <Input id="end_date" type="date" value={data.end_date} onChange={e => setData('end_date', e.target.value)} />
                        <InputError message={errors.end_date} />
                    </div>
                    <Button className="md:col-span-5" disabled={processing} type="submit">Add project</Button>
                </form>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="text-left">
                                <th className="p-2">Name</th>
                                <th className="p-2">Client</th>
                                <th className="p-2">Start</th>
                                <th className="p-2">End</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map(project => (
                                <tr key={project.id} className="border-t">
                                    <td className="p-2">{project.name}</td>
                                    <td className="p-2">{project.client?.name}</td>
                                    <td className="p-2">{project.start_date}</td>
                                    <td className="p-2">{project.end_date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
