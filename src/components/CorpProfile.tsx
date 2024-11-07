import React from 'react';
import { Theme, Avatar, Box, Card, Inset, Flex, Text, Link } from '@radix-ui/themes';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
export interface CorpProfileProps {
  name: string;
  nationality: string;
  corp_address: string;
  corp_num: string;
  review_count: number;
  biz_type: string;
  logo_image: string;
  homepage_url: string;
}

const CorpProfile: React.FC<CorpProfileProps> = ({
  name,
  nationality,
  corp_address,
  review_count,
  biz_type,
  logo_image,
  homepage_url,
}) => {
  return (
    <Theme>
      <Flex>
        <Box style={{ width: '800px', padding: '24px', margin: '16px 0' }}>
          <Card>
            <Inset>
              <img
                  src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Bold typography"
                  style={{
                    display: "block",
                    objectFit: "cover",
                    width: "100%",
                    height: 140,
                    backgroundColor: "var(--gray-5)",
                  }}
               />
            </Inset>
              <Flex direction="column" gap="4" align="start">
                <Flex direction="row" align="center" gap="4">
                  <Avatar src={logo_image} size="7" alt={`${name} logo`} radius="full" fallback={name.charAt(0)}/>
                  <Box>
                    <Text as="div" size="5" weight="bold">
                      {name}
                    </Text>
                    <Text as="p" color="gray" size="2">
                      {biz_type}
                    </Text>
                    <Text as="p" color="gray" size="2">
                      {nationality}
                    </Text>
                  </Box>
                </Flex>
                <Flex direction="row" gap="1" style={{ marginTop: '16px' }}>
                  <Box>
                    <Text as="p" size="3" weight="bold" color="gray">{corp_address}</Text>
                  </Box>
                  {'\u00b7'}
                  <Box>
                    <Text as="p" size="3" weight="bold" color="gray">리뷰 {review_count}건</Text>
                  </Box>
                  <Box pl="3">
                    <Link href={homepage_url} weight="bold">
                      홈페이지
                      <ExternalLinkIcon/>
                    </Link>
                  </Box>
                </Flex>
              </Flex>
          </Card>
        </Box>
      </Flex>
    </Theme>
  );
};

export default CorpProfile;