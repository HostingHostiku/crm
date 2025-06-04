import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin Panel', href: '/admin' },
];

export default function AdminPanel() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admin Panel" />
            <div className="p-4">Welcome to the admin panel.</div>
        </AppLayout>
    );
}
