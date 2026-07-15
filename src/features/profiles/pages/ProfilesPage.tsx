import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfiles } from '../hooks/useProfiles';
import { ProfileHeader } from '../components/ProfileHeader';
import { ProfileGrid } from '../components/ProfileGrid';
import { CreateProfileDialog } from '../components/CreateProfileDialog';
import { DuplicateProfileDialog } from '../components/DuplicateProfileDialog';
import { Spinner } from '../../../components/ui/Spinner';
import { profileService } from '../services/profile.service';
import type { Profile, ProfileSummary } from '../types/profile.types';
import type { ProfileCategory } from '../constants/profileCategories';

const ProfilesPage: React.FC = () => {
  const navigate = useNavigate();
  const { profiles, isLoading, refresh } = useProfiles();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [duplicatingProfile, setDuplicatingProfile] = useState<ProfileSummary | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProfiles = profiles.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpen = (id: string) => navigate(`/profiles/${id}`);

  const handleDuplicate = async (id: string, newName: string) => {
    const profile = await profileService.getProfile(id);
    if (profile) {
      const copy: Profile = {
        ...profile,
        id: `profile-${Date.now()}`,
        name: newName,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      await profileService.saveProfile(copy);
      setDuplicatingProfile(null);
      refresh();
    }
  };

  const handleExport = async (id: string) => {
    const data = await profileService.exportProfile(id);
    if (data) {
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `profile-${id}.json`;
      link.click();
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this profile?')) {
      await profileService.deleteProfile(id);
      refresh();
    }
  };

  const handleCreate = async (name: string, category: ProfileCategory) => {
    const newProfile: Profile = {
      id: `profile-${Date.now()}`,
      name,
      description: 'New custom profile',
      category,
      version: '1.0.0',
      status: 'draft',
      favorite: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      agentIds: [],
      workflowIds: [],
      promptIds: [],
      providerIds: [],
      modelIds: [],
      knowledgeCollectionIds: [],
      templateIds: [],
      variables: [],
      settings: {
        autoSave: true,
        autoVersioning: false,
        outputFormat: 'markdown',
        defaultLanguage: 'English',
        tone: 'Neutral',
        audience: 'General'
      },
      permissions: { canEdit: true, canShare: true, canDelete: true },
      tags: [],
      metadata: {}
    };
    await profileService.saveProfile(newProfile);
    setShowCreateModal(false);
    refresh();
    navigate(`/profiles/${newProfile.id}`);
  };

  if (isLoading) return <div style={{ display: 'flex', justifyContent: 'center', padding: 100 }}><Spinner size="large" /></div>;

  return (
    <div>
      <ProfileHeader
        onSearch={setSearchQuery}
        onCreateNew={() => setShowCreateModal(true)}
        onImport={() => console.log('Import triggered')}
      />

      <ProfileGrid
        profiles={filteredProfiles}
        onOpen={handleOpen}
        onDuplicate={(id) => {
          const p = profiles.find(x => x.id === id);
          if (p) setDuplicatingProfile(p);
        }}
        onExport={handleExport}
        onDelete={handleDelete}
      />

      {showCreateModal && (
        <CreateProfileDialog
          onClose={() => setShowCreateModal(false)}
          onCreate={handleCreate}
        />
      )}

      {duplicatingProfile && (
        <DuplicateProfileDialog
          profile={duplicatingProfile}
          onClose={() => setDuplicatingProfile(null)}
          onDuplicate={handleDuplicate}
        />
      )}
    </div>
  );
};

export default ProfilesPage;
