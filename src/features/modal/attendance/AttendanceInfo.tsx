import styled from '@emotion/styled';
import Avatar from '@/components/avatar';
import Grid from '@/components/grid';
import Text from '@/components/text';
import Radio from '@/components/radio';
import Container from '@/components/container';

interface AttendanceInfoProps {
  name: string;
  time: string;
  status: boolean;
  imageUrl: string;
}

const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid #ECEDEE;
`;

export default function AttendanceInfo({
  name, time, status, imageUrl,
}: AttendanceInfoProps) {
  return (
    <>
      <Grid
        columns={3}
        style={{
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Container direction="row" gap="10px">
          <Avatar src={imageUrl} alt={name} size="small" />
          <Text fontSize="15px">{name}</Text>
        </Container>
        <Text fontSize="12px">{time}</Text>
        <Container direction="row" justify="flex-start" gap="3px">
          <Radio name={`attendance-${name}`} defaultChecked={status} />
          <Text fontSize="10px">출석</Text>
          <Radio name={`attendance-${name}`} defaultChecked={!status} />
          <Text fontSize="10px">결석</Text>
        </Container>
      </Grid>
      <HorizontalLine />
    </>
  );
}
