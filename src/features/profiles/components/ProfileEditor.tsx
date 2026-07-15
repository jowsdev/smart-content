import React, { useState } from 'react';
import type { Profile, ProfileVariable } from '../types/profile.types';
import { ProfileSidebar } from './ProfileSidebar';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Badge } from '../../../components/ui/Badge';
import { Select } from '../../../components/ui/Select';
import { spacing } from '../../../styles/spacing';
import { colors } from '../../../styles/colors';
import { agentRegistry } from '../../agents/registry/AgentRegistry';
import { workflowRegistry } from '../../workflows/registry/WorkflowRegistry';
import { promptRegistry } from '../../prompts/registry/PromptRegistry';
import { providerRegistry } from '../../providers/registry/ProviderRegistry';
import { knowledgeRegistry } from '../../knowledge/registry/KnowledgeRegistry';
import { contentRegistry } from '../../content/registry/ContentRegistry';

// Internal Components for sections
const GeneralSection: React.FC<{ profile: Profile }> = ({ profile }) => (
  <div>
    <h3>General Information</h3>
    <div style={{ display: 'grid', gap: spacing.md }}>
      <div>
        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: spacing.xs }}>Name</label>
        <input
          type="text"
          defaultValue={profile.name}
          style={{ width: '100%', padding: spacing.sm, borderRadius: 4, border: `1px solid ${colors.border.main}`, backgroundColor: colors.background.light, color: colors.text.primary }}
        />
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: spacing.xs }}>Description</label>
        <textarea
          defaultValue={profile.description}
          style={{ width: '100%', padding: spacing.sm, borderRadius: 4, border: `1px solid ${colors.border.main}`, backgroundColor: colors.background.light, color: colors.text.primary, minHeight: 100 }}
        />
      </div>
    </div>
  </div>
);

const AgentsSection: React.FC<{ profile: Profile }> = ({ profile }) => {
  const allAgents = agentRegistry.getAllAgents();
  return (
    <div>
      <h3>Assigned Agents</h3>
      <p style={{ color: colors.text.secondary, marginBottom: spacing.md }}>Select agents that will be available in this profile.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.sm }}>
        {profile.agentIds.map(id => {
          const agent = agentRegistry.getAgent(id);
          return (
            <Badge key={id} variant="primary">
              {agent?.name || id} <span style={{ cursor: 'pointer', marginLeft: 4 }}>×</span>
            </Badge>
          );
        })}
        <Select
          options={allAgents.map(a => ({ label: a.name, value: a.id }))}
          placeholder="Add Agent..."
          onChange={() => {}}
          style={{ width: 200 }}
        />
      </div>
    </div>
  );
};

const WorkflowsSection: React.FC<{ profile: Profile }> = ({ profile }) => {
  const allWorkflows = workflowRegistry.getAllWorkflows();
  return (
    <div>
      <h3>Workflows</h3>
      <p style={{ color: colors.text.secondary, marginBottom: spacing.md }}>Automated sequences of tasks for this profile.</p>
      <div style={{ display: 'grid', gap: spacing.sm }}>
        {profile.workflowIds.map(id => {
          const wf = workflowRegistry.getWorkflow(id);
          return (
            <Card key={id} padding="small" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>{wf?.name || id}</span>
              <Button variant="ghost" size="small">Configure</Button>
            </Card>
          );
        })}
        <Select
          options={allWorkflows.map(w => ({ label: w.name, value: w.id }))}
          placeholder="Add Workflow..."
          onChange={() => {}}
        />
      </div>
    </div>
  );
};

const PromptsSection: React.FC<{ profile: Profile }> = ({ profile }) => {
  const allPrompts = promptRegistry.getAllPrompts();
  return (
    <div>
      <h3>Prompts</h3>
      <p style={{ color: colors.text.secondary, marginBottom: spacing.md }}>Pre-configured prompt templates for this profile.</p>
      <div style={{ display: 'grid', gap: spacing.sm }}>
        {profile.promptIds.map(id => {
          const prompt = promptRegistry.getPrompt(id);
          return (
            <Card key={id} padding="small" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 600 }}>{prompt?.name || id}</div>
                <div style={{ fontSize: '0.75rem', color: colors.text.muted }}>{prompt?.description}</div>
              </div>
              <Button variant="ghost" size="small">Edit</Button>
            </Card>
          );
        })}
        <Select
          options={allPrompts.map(p => ({ label: p.name, value: p.id }))}
          placeholder="Add Prompt Template..."
          onChange={() => {}}
        />
      </div>
    </div>
  );
};

const KnowledgeSection: React.FC<{ profile: Profile }> = ({ profile }) => {
  const allCollections = knowledgeRegistry.getAllCollections();
  return (
    <div>
      <h3>Knowledge Collections</h3>
      <p style={{ color: colors.text.secondary, marginBottom: spacing.md }}>Connect datasets and documentation to this profile.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing.sm }}>
        {profile.knowledgeCollectionIds.map(id => {
          const col = knowledgeRegistry.getCollection(id);
          return (
            <Badge key={id} variant="secondary">
              {col?.name || id} <span style={{ cursor: 'pointer', marginLeft: 4 }}>×</span>
            </Badge>
          );
        })}
        <Select
          options={allCollections.map(c => ({ label: c.name, value: c.id }))}
          placeholder="Add Collection..."
          onChange={() => {}}
          style={{ width: 200 }}
        />
      </div>
    </div>
  );
};

const ProvidersSection: React.FC<{ profile: Profile }> = ({ profile }) => {
  const allProviders = providerRegistry.getAllProviders();
  const selectedProvider = providerRegistry.getProvider(profile.settings.preferredProviderId || '');

  return (
    <div>
      <h3>Providers & Models</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing.lg }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: spacing.xs }}>Preferred Provider</label>
          <Select
            options={allProviders.map(p => ({ label: p.name, value: p.id }))}
            value={profile.settings.preferredProviderId}
            onChange={() => {}}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: spacing.xs }}>Recommended Model</label>
          <Select
            options={selectedProvider?.models.map(m => ({ label: m.name, value: m.id })) || []}
            value={profile.settings.preferredModelId}
            onChange={() => {}}
            disabled={!selectedProvider}
          />
        </div>
      </div>
    </div>
  );
};

const VariablesSection: React.FC<{ profile: Profile }> = ({ profile }) => (
  <div>
    <h3>Variables</h3>
    <p style={{ color: colors.text.secondary, marginBottom: spacing.md }}>Define custom fields required for projects using this profile.</p>
    <div style={{ display: 'grid', gap: spacing.sm }}>
      {profile.variables.map(v => (
        <Card key={v.id} padding="small">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <strong>{v.label} ({v.key})</strong>
            {v.required && <Badge variant="outline">Required</Badge>}
          </div>
          <div style={{ fontSize: '0.875rem', color: colors.text.muted }}>Type: {v.type}</div>
        </Card>
      ))}
      <Button variant="outline">+ Add Variable</Button>
    </div>
  </div>
);

const SettingsSection: React.FC<{ profile: Profile }> = ({ profile }) => (
  <div>
    <h3>Advanced Settings</h3>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing.md }}>
      <div>
        <label style={{ display: 'flex', alignItems: 'center', gap: spacing.sm }}>
          <input type="checkbox" defaultChecked={profile.settings.autoSave} />
          Auto Save
        </label>
      </div>
      <div>
        <label style={{ display: 'flex', alignItems: 'center', gap: spacing.sm }}>
          <input type="checkbox" defaultChecked={profile.settings.autoVersioning} />
          Auto Versioning
        </label>
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: spacing.xs }}>Default Language</label>
        <input type="text" defaultValue={profile.settings.defaultLanguage} style={{ width: '100%', padding: spacing.sm, borderRadius: 4, border: `1px solid ${colors.border.main}`, backgroundColor: colors.background.light, color: colors.text.primary }} />
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: spacing.xs }}>Output Format</label>
        <Select options={[{label: 'Markdown', value: 'markdown'}, {label: 'HTML', value: 'html'}]} value={profile.settings.outputFormat} onChange={() => {}} />
      </div>
    </div>
  </div>
);

interface ProfileEditorProps {
  profile: Profile;
  onSave: (profile: Profile) => void;
  onCancel: () => void;
}

export const ProfileEditor: React.FC<ProfileEditorProps> = ({
  profile,
  onSave,
  onCancel
}) => {
  const [activeSection, setActiveSection] = useState('general');

  const renderSection = () => {
    switch (activeSection) {
      case 'general': return <GeneralSection profile={profile} />;
      case 'agents': return <AgentsSection profile={profile} />;
      case 'workflows': return <WorkflowsSection profile={profile} />;
      case 'prompts': return <PromptsSection profile={profile} />;
      case 'knowledge': return <KnowledgeSection profile={profile} />;
      case 'providers': return <ProvidersSection profile={profile} />;
      case 'variables': return <VariablesSection profile={profile} />;
      case 'settings': return <SettingsSection profile={profile} />;
      case 'templates': {
        const allTemplates = contentRegistry.getAllTemplates();
        return (
          <div>
            <h3>Templates</h3>
            <div style={{ display: 'grid', gap: spacing.sm }}>
              {profile.templateIds.map(id => (
                <Card key={id} padding="small">{contentRegistry.getTemplate(id)?.name || id}</Card>
              ))}
              <Select options={allTemplates.map(t => ({ label: t.name, value: t.id }))} placeholder="Add Template..." onChange={() => {}} />
            </div>
          </div>
        );
      }
      default: return null;
    }
  };

  return (
    <div style={{ display: 'flex', gap: spacing.xl, padding: spacing.md }}>
      <ProfileSidebar
        profile={profile}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <div style={{ flexGrow: 1 }}>
        <Card padding="large">
          <div style={{ marginBottom: spacing.xl, minHeight: 400 }}>
            {renderSection()}
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: spacing.md,
            paddingTop: spacing.lg,
            borderTop: `1px solid ${colors.border.light}`
          }}>
            <Button variant="ghost" onClick={onCancel}>Cancel</Button>
            <Button variant="primary" onClick={() => onSave(profile)}>Save Profile</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
