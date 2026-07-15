import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProfile } from '../hooks/useProfile';
import { ProfileEditor } from '../components/ProfileEditor';
import { PageHeader } from '../../../components/ui/PageHeader';
import { Button } from '../../../components/ui/Button';
import { Spinner } from '../../../components/ui/Spinner';

const ProfileDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { profile, isLoading, save } = useProfile(id);

  if (isLoading) return <div style={{ display: 'flex', justifyContent: 'center', padding: 100 }}><Spinner size="large" /></div>;
  if (!profile) return <div style={{ padding: 50, textAlign: 'center' }}>Profile not found</div>;

  return (
    <div>
      <PageHeader
        title={profile.name}
        description={`Editing profile: ${profile.id}`}
        actions={
          <Button variant="outline" onClick={() => navigate('/profiles')}>Back to Gallery</Button>
        }
      />

      <ProfileEditor
        profile={profile}
        onSave={async (updated) => {
          await save(updated);
          navigate('/profiles');
        }}
        onCancel={() => navigate('/profiles')}
      />
    </div>
  );
};

export default ProfileDetailsPage;
