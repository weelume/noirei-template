'use client'
import type { TemplateLocale } from '../../../types'
import { useNoireiHost } from '../host'
/** 独立品牌与消费方品牌共用字标结构，避免服务端页面依赖消费方。 */
export function Wordmark({ locale }: { locale: TemplateLocale }) { const host = useNoireiHost(); return <div className="nr-wordmark">{host.brandName[locale].toUpperCase()}</div> }
