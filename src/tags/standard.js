'use strict';

module.exports = {
    // Baseline tags
    0x00FE: 'NewSubfileType',
    0x00FF: 'SubfileType',
    0x0100: 'ImageWidth',
    0x0101: 'ImageLength',
    0x0102: 'BitsPerSample',
    0x0103: 'Compression',
    0x0106: 'PhotometricInterpretation',
    0x0107: 'Threshholding',
    0x0108: 'CellWidth',
    0x0109: 'CellLength',
    0x010A: 'FillOrder',
    0x010E: 'ImageDescription',
    0x010F: 'Make',
    0x0110: 'Model',
    0x0111: 'StripOffsets',
    0x0112: 'Orientation',
    0x0115: 'SamplesPerPixel',
    0x0116: 'RowsPerStrip',
    0x0117: 'StripByteCounts',
    0x0118: 'MinSampleValue',
    0x0119: 'MaxSampleValue',
    0x011A: 'XResolution',
    0x011B: 'YResolution',
    0x011C: 'PlanarConfiguration',
    0x0120: 'FreeOffsets',
    0x0121: 'FreeByteCounts',
    0x0122: 'GrayResponseUnit',
    0x0123: 'GrayResponseCurve',
    0x0128: 'ResolutionUnit',
    0x0131: 'Software',
    0x0132: 'DateTime',
    0x013B: 'Artist',
    0x013C: 'HostComputer',
    0x0140: 'ColorMap',
    0x0152: 'ExtraSamples',
    0x8298: 'Copyright',

    // Extension tags
    0x010D: 'DocumentName',
    0x011D: 'PageName',
    0x011E: 'XPosition',
    0x011F: 'YPosition',
    0x0124: 'T4Options',
    0x0125: 'T6Options',
    0x0129: 'PageNumber',
    0x012D: 'TransferFunction',
    0x013D: 'Predictor',
    0x013E: 'WhitePoint',
    0x013F: 'PrimaryChromaticities',
    0x0141: 'HalftoneHints',
    0x0142: 'TileWidth',
    0x0143: 'TileLength',
    0x0144: 'TileOffsets',
    0x0145: 'TileByteCounts',
    0x0146: 'BadFaxLines',
    0x0147: 'CleanFaxData',
    0x0148: 'ConsecutiveBadFaxLines',
    0x014A: 'SubIFDs',
    0x014C: 'InkSet',
    0x014D: 'InkNames',
    0x014E: 'NumberOfInks',
    0x0150: 'DotRange',
    0x0151: 'TargetPrinter',
    0x0153: 'SampleFormat',
    0x0154: 'SMinSampleValue',
    0x0155: 'SMaxSampleValue',
    0x0156: 'TransferRange',
    0x0157: 'ClipPath',
    0x0158: 'XClipPathUnits',
    0x0159: 'YClipPathUnits',
    0x015A: 'Indexed',
    0x015B: 'JPEGTables',
    0x015F: 'OPIProxy',
    0x0190: 'GlobalParametersIFD',
    0x0191: 'ProfileType',
    0x0192: 'FaxProfile',
    0x0193: 'CodingMethods',
    0x0194: 'VersionYear',
    0x0195: 'ModeNumber',
    0x01B1: 'Decode',
    0x01B2: 'DefaultImageColor',
    0x0200: 'JPEGProc',
    0x0201: 'JPEGInterchangeFormat',
    0x0202: 'JPEGInterchangeFormatLength',
    0x0203: 'JPEGRestartInterval',
    0x0205: 'JPEGLosslessPredictors',
    0x0206: 'JPEGPointTransforms',
    0x0207: 'JPEGQTables',
    0x0208: 'JPEGDCTables',
    0x0209: 'JPEGACTables',
    0x0211: 'YCbCrCoefficients',
    0x0212: 'YCbCrSubSampling',
    0x0213: 'YCbCrPositioning',
    0x0214: 'ReferenceBlackWhite',
    0x022F: 'StripRowCounts',
    0x02BC: 'XMP',
    0x800D: 'ImageID',
    0x87AC: 'ImageLayer',

    // Private tags
    0x80A4: 'WangAnnotatio',
    0x82A5: 'MDFileTag',
    0x82A6: 'MDScalePixel',
    0x82A7: 'MDColorTable',
    0x82A8: 'MDLabName',
    0x82A9: 'MDSampleInfo',
    0x82AA: 'MDPrepDate',
    0x82AB: 'MDPrepTime',
    0x82AC: 'MDFileUnits',
    0x830E: 'ModelPixelScaleTag',
    0x83BB: 'IPTC',
    0x847E: 'INGRPacketDataTag',
    0x847F: 'INGRFlagRegisters',
    0x8480: 'IrasBTransformationMatrix',
    0x8482: 'ModelTiepointTag',
    0x85D8: 'ModelTransformationTag',
    0x8649: 'Photoshop',
    0x8769: 'ExifIFD',
    0x8773: 'ICCProfile',
    0x87AF: 'GeoKeyDirectoryTag',
    0x87B0: 'GeoDoubleParamsTag',
    0x87B1: 'GeoAsciiParamsTag',
    0x8825: 'GPSIFD',
    0x885C: 'HylaFAXFaxRecvParams',
    0x885D: 'HylaFAXFaxSubAddress',
    0x885E: 'HylaFAXFaxRecvTime',
    0x935C: 'ImageSourceData',
    0xA005: 'InteroperabilityIFD',
    0xA480: 'GDAL_METADATA',
    0xA481: 'GDAL_NODATA',
    0xC427: 'OceScanjobDescription',
    0xC428: 'OceApplicationSelector',
    0xC429: 'OceIdentificationNumber',
    0xC42A: 'OceImageLogicCharacteristics',
    0xC612: 'DNGVersion',
    0xC613: 'DNGBackwardVersion',
    0xC614: 'UniqueCameraModel',
    0xC615: 'LocalizedCameraModel',
    0xC616: 'CFAPlaneColor',
    0xC617: 'CFALayout',
    0xC618: 'LinearizationTable',
    0xC619: 'BlackLevelRepeatDim',
    0xC61A: 'BlackLevel',
    0xC61B: 'BlackLevelDeltaH',
    0xC61C: 'BlackLevelDeltaV',
    0xC61D: 'WhiteLevel',
    0xC61E: 'DefaultScale',
    0xC61F: 'DefaultCropOrigin',
    0xC620: 'DefaultCropSize',
    0xC621: 'ColorMatrix1',
    0xC622: 'ColorMatrix2',
    0xC623: 'CameraCalibration1',
    0xC624: 'CameraCalibration2',
    0xC625: 'ReductionMatrix1',
    0xC626: 'ReductionMatrix2',
    0xC627: 'AnalogBalance',
    0xC628: 'AsShotNeutral',
    0xC629: 'AsShotWhiteXY',
    0xC62A: 'BaselineExposure',
    0xC62B: 'BaselineNoise',
    0xC62C: 'BaselineSharpness',
    0xC62D: 'BayerGreenSplit',
    0xC62E: 'LinearResponseLimit',
    0xC62F: 'CameraSerialNumber',
    0xC630: 'LensInfo',
    0xC631: 'ChromaBlurRadius',
    0xC632: 'AntiAliasStrength',
    0xC634: 'DNGPrivateData',
    0xC635: 'MakerNoteSafety',
    0xC65A: 'CalibrationIlluminant1',
    0xC65B: 'CalibrationIlluminant2',
    0xC65C: 'BestQualityScale',
    0xC660: 'AliasLayerMetadata'
};
