import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, Briefcase, BookUser, Contact, ShieldCheck, UserCheck } from 'lucide-react';
import AppLogo from './app-logo';

function useMainNavItems(): NavItem[] {
    const roles = usePage().props.auth.user.roles as string[] | undefined;

    const items: NavItem[] = [
        { title: 'Dashboard', href: '/dashboard', icon: LayoutGrid },
        { title: 'Clients', href: '/clients', icon: BookUser },
        { title: 'Contacts', href: '/contacts', icon: Contact },
        { title: 'Projects', href: '/projects', icon: Briefcase },
    ];

    if (roles?.includes('admin')) {
        items.push({ title: 'Admin Panel', href: '/admin', icon: LayoutGrid });
        items.push({ title: 'Administrators', href: '/admins', icon: UserCheck });
        items.push({ title: 'Permissions', href: '/permissions', icon: ShieldCheck });
    }

    return items;
}

const footerNavItems: NavItem[] = [
    {
        title: 'Repo',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentación',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    const mainNavItems = useMainNavItems();
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
