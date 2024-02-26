import { useRecordContext } from "react-admin";
import { Avatar, Stack, Typography } from "@mui/material";

export const CustomerField = () => {
  const record = useRecordContext();
  return record ? (
    <Stack direction="row" alignItems="center" gap={1}>
      <Avatar
        src={record.avatar}
        style={{ width: 25, height: 25 }}
        alt={`${record.first_name} ${record.last_name}`}
      />
      <Typography variant="body2">
        {record.first_name} {record.last_name}
      </Typography>
    </Stack>
  ) : null;
};
