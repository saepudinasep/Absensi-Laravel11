import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function UserIndex({ auth, users }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">User</h2>}
        >
            <Head title="Users" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="min-w-full">
                                <thead>
                                    <tr className="border-b-2">
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Id</th>
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Name</th>
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Email</th>
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.id} className="border-b">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {user.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {user.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {user.email}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
