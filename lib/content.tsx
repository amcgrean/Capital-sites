/**
 * Shared marketing content for Cecilia's Home — values, services, methodology.
 * Kept in one place so the homepage and interior pages stay consistent.
 * Tailwind classes are written out in full (no dynamic strings) so they are
 * not purged from the build.
 */
import {
  HandHeartIcon,
  UsersIcon,
  HeartIcon,
  StarPoint,
  ShieldIcon,
  ClockIcon,
  type IconComponent,
} from '@/components/icons'

export type Value = {
  label: string
  blurb: string
  Icon: IconComponent
  ring: string // background tint for the icon badge
  text: string // icon color
}

export const VALUES: Value[] = [
  {
    label: 'Care',
    blurb: 'We lead with compassion in every interaction, every day.',
    Icon: HandHeartIcon,
    ring: 'bg-sky/10',
    text: 'text-sky',
  },
  {
    label: 'Respect',
    blurb: 'Every person is honored for exactly who they are.',
    Icon: UsersIcon,
    ring: 'bg-sage/10',
    text: 'text-sage',
  },
  {
    label: 'Dignity',
    blurb: 'We protect the worth, privacy, and voice of each resident.',
    Icon: HeartIcon,
    ring: 'bg-navy/10',
    text: 'text-navy',
  },
  {
    label: 'Opportunity',
    blurb: 'We open doors to growth, choice, and independence.',
    Icon: StarPoint,
    ring: 'bg-gold/10',
    text: 'text-gold',
  },
]

export type Service = {
  title: string
  desc: string
  Icon: IconComponent
}

export const SERVICES: Service[] = [
  {
    title: 'Safe & Comfortable Living',
    desc: 'A secure, welcoming home designed for comfort, stability, and a genuine sense of belonging.',
    Icon: ShieldIcon,
  },
  {
    title: '24/7 Supportive Care',
    desc: 'Trained staff on-site around the clock, so support is always there the moment it is needed.',
    Icon: ClockIcon,
  },
  {
    title: 'Person-Centered Support',
    desc: 'Care built around each individual’s goals, preferences, and strengths — never one-size-fits-all.',
    Icon: HandHeartIcon,
  },
  {
    title: 'Professional & Compassionate Staff',
    desc: 'A dedicated team that pairs real expertise with genuine warmth, patience, and understanding.',
    Icon: UsersIcon,
  },
]

export const METHODOLOGY: string[] = [
  'We plan with purpose.',
  'We implement with integrity.',
  'We measure for growth.',
  'We improve continuously.',
]
