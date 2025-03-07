import type { NextConfig } from 'next'

import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
	output: 'standalone',
	eslint: {
		ignoreDuringBuilds: true,
	},
}

export default withPayload(nextConfig)