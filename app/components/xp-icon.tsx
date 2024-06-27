import {
  AppWindow,
  ArrowLeftRight,
  Cctv,
  Container,
  MonitorSmartphone,
  Settings,
  Smartphone,
  Workflow,
} from 'lucide-react';

type XpIconProps = {
  icon: string;
};

export default function XpIcon({ icon }: XpIconProps) {
  switch (icon) {
    case 'web':
      return <AppWindow />;

    case 'mobile':
      return <Smartphone />;

    case 'network':
      return <ArrowLeftRight />;

    case 'devops':
      return <Workflow />;

    case 'container':
      return <Container />;

    case 'iot':
      return <Cctv />;

    case 'desktop':
      return <MonitorSmartphone />;

    case 'services':
      return <Settings />;

    default:
      break;
  }
}
