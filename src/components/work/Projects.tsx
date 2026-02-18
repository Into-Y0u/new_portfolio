import { Column } from "@once-ui-system/core";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Projects({ range, exclude }: ProjectsProps) {
  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {/* No projects available */}
    </Column>
  );
}
