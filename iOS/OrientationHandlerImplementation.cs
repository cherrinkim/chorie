using System;

using Xamarin.Forms;
using UIKit;
using Foundation;

namespace chorie.iOS
{
	public class OrientationHandlerImplementation : IOrientationHandler
	{
		public void ForceLandscape()
		{
			UIDevice.CurrentDevice.SetValueForKey(new NSNumber((int)UIInterfaceOrientation.LandscapeLeft), new NSString("orientation"));
		}

		public void ForcePortrait()
		{
			UIDevice.CurrentDevice.SetValueForKey(new NSNumber((int)UIInterfaceOrientation.Portrait), new NSString("orientation"));
		}
	}
}

