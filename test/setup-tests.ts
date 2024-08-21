/**
 * The @testing-library/jest-dom library provides a set of custom matchers that you can use to extend Vitest matchers
 *
 * @see https://github.com/testing-library/jest-dom?tab=readme-ov-file#with-vitest
 */

import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'
import { expect } from 'vitest'

expect.extend(matchers)
