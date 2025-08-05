import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, FileText, Eye, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Application {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  status: string;
  created_at: string;
  course_applied: string;
}

export default function AdminDashboard() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0
  });
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchApplications();
    fetchStats();
  }, []);

  const fetchApplications = async () => {
    try {
      // Mock data for now until database types are updated
      const mockData = [
        {
          id: '1',
          first_name: 'John',
          last_name: 'Doe',
          email: 'john.doe@example.com',
          phone: '+1234567890',
          status: 'pending',
          created_at: new Date().toISOString(),
          course_applied: 'Health Assistant Course'
        }
      ];
      setApplications(mockData);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch applications",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      // Mock stats for now
      setStats({ total: 1, pending: 1, approved: 0, rejected: 0 });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const updateApplicationStatus = async (id: string, newStatus: string) => {
    try {
      // Mock update for now
      setApplications(prev => 
        prev.map(app => 
          app.id === id ? { ...app, status: newStatus } : app
        )
      );

      fetchStats();

      toast({
        title: "Success",
        description: `Application ${newStatus} successfully`
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update application status",
        variant: "destructive"
      });
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      pending: 'secondary',
      approved: 'default',
      rejected: 'destructive'
    } as const;

    return (
      <Badge variant={variants[status as keyof typeof variants] || 'secondary'}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pending}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.approved}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rejected</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.rejected}</div>
          </CardContent>
        </Card>
      </div>

      {/* Applications Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Applications</CardTitle>
          <CardDescription>
            Manage and review submitted applications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <ApplicationsList 
                applications={applications} 
                onStatusUpdate={updateApplicationStatus}
              />
            </TabsContent>

            <TabsContent value="pending" className="space-y-4">
              <ApplicationsList 
                applications={applications.filter(app => app.status === 'pending')} 
                onStatusUpdate={updateApplicationStatus}
              />
            </TabsContent>

            <TabsContent value="approved" className="space-y-4">
              <ApplicationsList 
                applications={applications.filter(app => app.status === 'approved')} 
                onStatusUpdate={updateApplicationStatus}
              />
            </TabsContent>

            <TabsContent value="rejected" className="space-y-4">
              <ApplicationsList 
                applications={applications.filter(app => app.status === 'rejected')} 
                onStatusUpdate={updateApplicationStatus}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

interface ApplicationsListProps {
  applications: Application[];
  onStatusUpdate: (id: string, status: string) => void;
}

function ApplicationsList({ applications, onStatusUpdate }: ApplicationsListProps) {
  if (applications.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No applications found
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {applications.map((application) => (
        <div key={application.id} className="border rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">
                {application.first_name} {application.last_name}
              </h3>
              <p className="text-sm text-muted-foreground">{application.email}</p>
              <p className="text-sm text-muted-foreground">{application.phone}</p>
              <p className="text-sm text-muted-foreground">Course: {application.course_applied}</p>
              <p className="text-xs text-muted-foreground">
                Applied: {new Date(application.created_at).toLocaleDateString()}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {getStatusBadge(application.status)}
            </div>
          </div>

          <div className="flex gap-2">
            {application.status === 'pending' && (
              <>
                <Button
                  size="sm"
                  onClick={() => onStatusUpdate(application.id, 'approved')}
                >
                  Approve
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => onStatusUpdate(application.id, 'rejected')}
                >
                  Reject
                </Button>
              </>
            )}
            <Button size="sm" variant="outline">
              View Details
            </Button>
          </div>
        </div>
      ))}
    </div>
  );

  function getStatusBadge(status: string) {
    const variants = {
      pending: 'secondary',
      approved: 'default',
      rejected: 'destructive'
    } as const;

    return (
      <Badge variant={variants[status as keyof typeof variants] || 'secondary'}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  }
}