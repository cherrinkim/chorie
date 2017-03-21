using System;

using Xamarin.Forms;
using Android.Content.PM;

namespace chorie.Droid
{
	public class OrientationHandler : BaseDependencyImplementation, IOrientationHandler
	{
		public void ForceLandscape()
		{
			GetActivity().RequestedOrientation = ScreenOrientation.Landscape;
		}

		public void ForcePortrait()
		{
			GetActivity().RequestedOrientation = ScreenOrientation.Portrait;
		}
	}
}

